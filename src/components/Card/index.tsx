import { Icons, getIcon } from "../../assets/icons";
import DropdownMenuDemo from "../Options";
import { Container, FileMame } from "./styles";
// import Icon from "../../assets/icons/folder-aws.svg";

export interface FolderCardProps {
  name?: string;
  path: string;
}

function getFileIconName(fileName?: string): Icons {
  console.log(fileName);
  if (fileName?.endsWith(".css")) return "css";
  if (fileName?.endsWith(".pdf")) return "pdf";
  if (fileName?.endsWith(".zip")) return "zip";
  if (fileName?.endsWith(".log")) return "log";
  if (fileName?.endsWith(".bin")) return "bin";
  if (fileName?.endsWith(".json")) return "json";
  if (fileName?.endsWith(".html")) return "html";
  if (fileName?.endsWith(".js") || fileName?.endsWith(".ts"))
    return "javascript";

  if (
    fileName?.endsWith(".png") ||
    fileName?.endsWith(".jpeg") ||
    fileName?.endsWith(".WebP") ||
    fileName?.endsWith(".apng") ||
    fileName?.endsWith(".svg")
  )
    return "image";

  return "document";
}

export function FileCard({ name, path }: FolderCardProps) {
  const icon = getIcon(getFileIconName(name));
  return (
    <a style={{ textDecoration: "none" }} href={path} title={name}>
      <Container>
        <span
          style={{
            display: "flex",
            padding: 0,
            paddingTop: 2,
            justifyContent: "flex-end",
          }}
        >
          <DropdownMenuDemo download url={`./${path}`} />
        </span>
        <img src={icon} alt="" />
        <FileMame>{name}</FileMame>
      </Container>
    </a>
  );
}
