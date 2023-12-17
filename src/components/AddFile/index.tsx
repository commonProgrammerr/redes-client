import { UploadIcon } from "@radix-ui/react-icons";
import { Container, Dialog } from "./styles";
import { useDropzone } from "react-dropzone";
import { useLocation } from "react-router-dom";
import { FormEventHandler, useMemo, useState } from "react";
import { useCallback } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  RightSlot,
} from "../Options/styles";
import { api } from "../../utils/api";

// function streamUpload(url: string, data: Blob) {
//   const xhr = new XMLHttpRequest();
//   // Add any event handlers here...
//   xhr.open("POST", url, true);
//   xhr.setRequestHeader("Transfer-Encoding", "chunked");
//   xhr.send(data);
// }

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export function AddFile() {
  const params = useQuery();
  const [isDialogOpen, setDialogOpen] = useState(false);

  const newFolder = useCallback<FormEventHandler>(
    (ev) => {
      ev.preventDefault();
      const form = ev.target as HTMLFormElement;
      const input = form[0] as HTMLInputElement;
      setDialogOpen(false);
      api.post(`/folder?path=${params.get("path") || ""}/${input.value}`);
    },
    [params]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => {
      console.log(files);
      // const url = `/upload?path=${params.get("path") || ""}/${files[0]?.name}`;
      const url = `http://localhost:8080/upload?path=${
        params.get("path") || ""
      }/${files[0]?.name}`;

      if (files?.[0]) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("poli-file", "chunked");
        xhr.send(files[0]);
      }
    },
  });

  return (
    <>
      <Dialog open={isDialogOpen}>
        <form onSubmit={newFolder} onReset={() => setDialogOpen(false)}>
          <h3>New folder</h3>
          <input type="text" name="folder" />
          <div>
            <button type="reset">Cancelar</button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </Dialog>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Container>
            <PlusIcon width="1em" height="1em" stroke="2em" />
          </Container>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenuContent sideOffset={5}>
            <DropdownMenuItem asChild>
              <div {...getRootProps()}>
                <input type="file" {...getInputProps()} />
                Upload File
                <RightSlot>
                  <UploadIcon />
                </RightSlot>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setDialogOpen(true)}>
              New folder
              <RightSlot>
                <svg
                  fill="none"
                  version="1.1"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-0.53043-0.2107-1.0391-0.5858-1.4142-0.3751-0.37508-0.8838-0.58579-1.4142-0.58579h-8l-2-2z"
                    stroke="white"
                  />
                </svg>
              </RightSlot>
            </DropdownMenuItem>
            <DropdownMenuArrow />
          </DropdownMenuContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
}
