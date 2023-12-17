import { useLoaderData } from "react-router-dom";
import { FileCard } from "../../components/Card";
import { FolderCard } from "../../components/Card/FolderCard";
import { Container, Content } from "./styles";
import { AddFile } from "../../components/AddFile";

export function Root() {
  const files = useLoaderData() as Array<{ path: string; type: string }>;
  return (
    <Container>
      <Content>
        {files.map((file) =>
          file.type === "file" ? (
            <FileCard name={file.path.split("/").pop()} path={file.path} />
          ) : (
            <FolderCard name={file.path.split("/").pop()} path={file.path} />
          )
        )}
      </Content>
      <AddFile />
    </Container>
  );
}
