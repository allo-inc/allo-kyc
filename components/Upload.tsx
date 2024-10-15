import { useEffect, useState } from "react";

const Upload = ({
  data,
  description = "Supported Format: PDF, DOC, JPG, PNG (max 50mb).",
  onFilesChange,
  maxFileSize = 50 * 1024 * 1024,
  allowedFileTypes = [".pdf", ".doc", ".jpg", ".png", ".svg"],
}: any) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (event: any) => {
    const selectedFiles: File[] = Array.from(event.target.files);
    const validFiles = selectedFiles.filter((file) => file.size <= maxFileSize);

    if (validFiles.length) {
      const newFiles = [...files, ...validFiles];
      setFiles(newFiles);
      onFilesChange(newFiles);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    onFilesChange(newFiles);
  };

  useEffect(() => {
    if (data) setFiles(data);
  }, [data]);

  return (
    <div
      className={`w-full h-auto bg-white p-4 transition border-2 border-dashed cursor-pointer rounded-xl ${
        files.length === 0
          ? "hover:bg-neutral-50 dark:hover:bg-neutral-800"
          : ""
      } dark:border-neutral-600`}
    >
      {files.length > 0 ? (
        <div className="flex w-full gap-4 text-center">
          {files.map((item, index) => (
            <div
              key={index}
              className="relative grid w-32 h-full gap-2 p-2 border rounded dark:border-neutral-600 group"
            >
              <div className="rounded-lg">
                <svg
                  className="mx-auto text-neutral-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62Z"
                  ></path>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M256 56v120a32 32 0 0 0 32 32h120m-232 80h160m-160 80h160"
                  ></path>
                </svg>
              </div>
              <div className="grid gap-1">
                <p className="text-sm font-bold truncate">{item.name}</p>
                <div
                  className="absolute items-center justify-center hidden top-2 right-2 group-hover:flex"
                  onClick={() => removeFile(index)}
                >
                  <svg
                    className="text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm1 2H6v12h12zm-4.586 6l1.768 1.768l-1.414 1.414L12 15.414l-1.768 1.768l-1.414-1.414L10.586 14l-1.768-1.768l1.414-1.414L12 12.586l1.768-1.768l1.414 1.414zM9 4v2h6V4z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="cursor-pointer">
          <input
            type="file"
            accept={allowedFileTypes.join(",")}
            className="hidden"
            onChange={handleFileUpload}
            id="fileInput"
            multiple
          />
          <label
            htmlFor="fileInput"
            className="grid gap-2 mx-auto text-base text-center cursor-pointer"
          >
            <div className="flex items-center justify-center w-[36px] h-[36px] mx-auto rounded-full bg-neutral-100 dark:bg-neutral-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinejoin="round"
                    d="M14.186 2.753v3.596c0 .487.194.955.54 1.3a1.85 1.85 0 0 0 1.306.539h4.125"
                  ></path>
                  <path
                    strokeLinejoin="round"
                    d="M20.25 8.568v8.568a4.251 4.251 0 0 1-1.362 2.97a4.283 4.283 0 0 1-3.072 1.14h-7.59a4.294 4.294 0 0 1-3.1-1.124a4.265 4.265 0 0 1-1.376-2.986V6.862a4.25 4.25 0 0 1 1.362-2.97a4.283 4.283 0 0 1 3.072-1.14h5.714a3.503 3.503 0 0 1 2.361.905l2.96 2.722a2.971 2.971 0 0 1 1.031 2.189"
                  ></path>
                  <path strokeMiterlimit="10" d="M12 10.499v6.774"></path>
                  <path
                    strokeLinejoin="round"
                    d="m15.106 13.35l-2.665-2.665a.62.62 0 0 0-.882 0l-2.665 2.666"
                  ></path>
                </g>
              </svg>
            </div>
            <div>
              <p>
                <span className="font-bold">Click here</span> to upload your
                file or drag & drop.
              </p>
              <p className="text-sm text-neutral-400">{description}</p>
            </div>
          </label>
        </div>
      )}
    </div>
  );
};

export default Upload;
