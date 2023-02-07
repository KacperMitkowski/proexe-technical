import { Box, Modal } from "@mui/material";

interface IProps {
  modalOpen: boolean;
  close?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
  children: any;
  style?: object;
}

export const CustomModal = ({ modalOpen, close, children, style }: IProps) => {
  if (!modalOpen) return <></>;

  return (
    <Modal keepMounted open onClose={close}>
      <Box style={style}>{children}</Box>
    </Modal>
  );
};
