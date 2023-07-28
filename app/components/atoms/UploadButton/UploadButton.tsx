import { NextPage } from "next";
import { useRef } from "react";

interface Props {
  onUpload: (fileContent: string) => void;
}

const UploadButton: NextPage<Props> = ({ onUpload }) => {
  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const fileReader = new FileReader();

    fileReader.onload = () => {
      const fileData = fileReader.result as string;
      onUpload(fileData);
    };

    fileReader.readAsText(file);
  };

  return (
    <div>
      <input
        className="py-2 px-4 rounded-md border-2 font-semibold"
        type="file"
        accept=".txt"
        onChange={handleUploadFile}
      />
    </div>
  );
};

export default UploadButton;
