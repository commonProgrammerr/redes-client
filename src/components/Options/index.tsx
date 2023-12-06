import { useCallback } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  // DotFilledIcon,
  // CheckIcon,
  CopyIcon,
  OpenInNewWindowIcon,
  DotsVerticalIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import {
  DropdownMenuArrow,
  // DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuItemIndicator,
  // DropdownMenuLabel,
  // DropdownMenuRadioItem,
  // DropdownMenuSeparator,
  // DropdownMenuSubContent,
  // DropdownMenuSubTrigger,
  IconButton,
  RightSlot,
} from "./styles";
import axios from "axios";
function DropdownMenuDemo({ url }: { url: string }) {
  // const [_, copy] = useCopyToClipboard();
  const openInNewTab = useCallback(() => {
    console.log(url);
    url && window.open(url, "_blank", "noreferrer");
  }, [url]);
  const copyLink = useCallback(() => {
    const { host } = window.location;
    const _url = `http://${host}/${url.replace("./", "")}`;

    navigator.clipboard.writeText(_url);
  }, [url]);

  const deleteFile = useCallback(() => {
    axios.delete(`/files?path=${url.replace("./", "")}`);
  }, [url]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <IconButton aria-label="Customise options">
          <DotsVerticalIcon />
        </IconButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent sideOffset={5}>
          <DropdownMenuItem onClick={openInNewTab}>
            New Tab
            <RightSlot>
              <OpenInNewWindowIcon />
            </RightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={copyLink}>
            Copy
            <RightSlot>
              <CopyIcon />
            </RightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={deleteFile}>
            Delete
            <RightSlot>
              <TrashIcon />
            </RightSlot>
          </DropdownMenuItem>
          {/* <DropdownMenu.Sub>
            <RightSlot>
              <ChevronRightIcon />
            </RightSlot>
            <DropdownMenuSubTrigger>
              More Tools
              <RightSlot>
                <ChevronRightIcon />
              </RightSlot>
            </DropdownMenuSubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
                <DropdownMenuItem>
                  Save Page As… <RightSlot>⌘+S</RightSlot>
                </DropdownMenuItem>
                <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
                <DropdownMenuItem>Name Window…</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Developer Tools</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub> */}
          {/* <DropdownMenuSeparator /> */}
          {/* <DropdownMenuCheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenuItemIndicator>
              <CheckIcon />
            </DropdownMenuItemIndicator>
            Show Bookmarks <RightSlot>⌘+B</RightSlot>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenuItemIndicator>
              <CheckIcon />
            </DropdownMenuItemIndicator>
            Show Full URLs
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator /> */}
          {/* <DropdownMenuLabel>People</DropdownMenuLabel> */}
          {/* <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenuRadioItem value="pedro">
              <DropdownMenuItemIndicator>
                <DotFilledIcon />
              </DropdownMenuItemIndicator>
              Pedro Duarte
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="colm">
              <DropdownMenuItemIndicator>
                <DotFilledIcon />
              </DropdownMenuItemIndicator>
              Colm Tuite
            </DropdownMenuRadioItem>
          </DropdownMenu.RadioGroup> */}

          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
export default DropdownMenuDemo;
