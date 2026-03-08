import { Button } from "@mui/material"
import jsPDF from "jspdf"

export default function ExportPDF({ tweets }: { tweets: string[] }) {

  const exportPDF = () => {
    const pdf = new jsPDF()
    let y = 20
    for (let i = 0; i < tweets.length; i++) {
      pdf.text(`${i + 1}. ${tweets[i]}`, 10, y)
      y += 10
    }
    pdf.save("tweets.pdf")
  }

  return (
    <Button
      variant="contained"
      onClick={exportPDF}
      sx={{
        mt: 3,
        borderRadius: 3,
        fontWeight: 700,
        py: 1.5,
        letterSpacing: 1,
        background: `
          linear-gradient(
            270deg,
            #7f5af0,
            #2cb67d,
            #3a86ff
          )
        `,
        backgroundSize: "300% 300%",
        animation: "buttonGlow 6s ease infinite",
        transition: "all 0.3s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0 0 25px rgba(127,90,240,0.7)"
        },
        "@keyframes buttonGlow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      }}
    >
      Export Tweets PDF
    </Button>
  )
}