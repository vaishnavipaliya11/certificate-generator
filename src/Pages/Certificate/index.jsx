import { Certificate } from "../../Components";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import BackArrow from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/system";
import { useRef } from "react";
import Pdf from "react-to-pdf";
import { useNavigate } from "react-router-dom";

export const CertificatePage = () => {
  const { candidateName } = useParams();
  const certificateRef = useRef(null);
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={navigateBack} startIcon={<BackArrow />} variant="outlined">
          Back
        </Button>
        <Pdf
          targetRef={certificateRef}
          filename={`${candidateName}.pdf`}
          options={{ backgroundColor: "red", orientation: "landscape" }}
          scale={1}
          x={-42}
          y={0}
        >
          {({ toPdf }) => (
            <Button onClick={toPdf} startIcon={<DownloadIcon />} variant="contained">
              Download
            </Button>
          )}
        </Pdf>
      </Box>
      <Certificate ref={certificateRef} candidateName={candidateName} />
    </Box>
  );
};
