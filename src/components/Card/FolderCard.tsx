import { Link } from "react-router-dom";
import { getIcon } from "../../assets/icons";
import DropdownMenuDemo from "../Options";
import { Container, FileMame } from "./styles";
import { FolderCardProps } from ".";

export function FolderCard({ name, path }: FolderCardProps) {
  const icon = getIcon("folder");
  return (
    <Link style={{ textDecoration: "none" }} to={`/?path=${path}`} title={name}>
      <Container>
        <span
          style={{
            display: "flex",
            padding: 0,
            paddingTop: 2,
            justifyContent: "flex-end",
          }}
        >
          <DropdownMenuDemo url={`/?path=${path}`} />
        </span>
        <img src={icon} alt="" />
        <FileMame>{name}</FileMame>
      </Container>
    </Link>
  );
}
