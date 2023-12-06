import { UploadIcon } from "@radix-ui/react-icons";
import { Container } from "./styles";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export function AddFile() {
  const params = useQuery();

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => {
      console.log(files);
      const reader = new FileReader();
      reader.onload = (evt) => {
        if (evt.target?.readyState !== 2) return;
        if (evt.target?.error) {
          throw new Error("Error while reading file");
        }
        if (evt.target.result) {
          axios.post(
            `/files?path=${params.get("path") || ""}/${files[0]?.name}`,
            evt.target.result
          );
        }
      };

      files?.[0] && reader.readAsText(files[0]);
    },
  });
  return (
    <Container {...getRootProps()}>
      <input type="file" {...getInputProps()} />
      <UploadIcon width="1em" height="1em" stroke="2em" />
    </Container>
  );
}
