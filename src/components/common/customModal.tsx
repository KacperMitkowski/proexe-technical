import { Box, Card, Modal } from "@mui/material";

interface IProps {
  modalOpen: boolean;
  close?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
  children: any;
  customClass?: string;
}

export const CustomModal = ({
  modalOpen,
  close,
  children,
  customClass,
}: IProps) => {
  if (!modalOpen) return <></>;

  return (
    <Modal keepMounted open onClose={close}>
      <Box className={customClass}>{children}</Box>
    </Modal>
  );
};
