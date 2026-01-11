"use client";

export default function UploadButton() {
  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const res = await fetch("/api/safeluno/upload-url", { method: "POST" });
    const { uploadUrl } = await res.json();

    await fetch(uploadUrl, {
      method: "PUT",
      body: file,
      headers: { "x-ms-blob-type": "BlockBlob" }
    });

    alert("Uploaded!");
  }

  return (
    <input
      type="file"
      onChange={handleUpload}
      className="border p-2 rounded"
    />
  );
}
