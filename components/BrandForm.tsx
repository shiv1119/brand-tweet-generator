"use client"
import { useState } from "react"
import { TextField, Button, Paper, Stack, Box } from "@mui/material"

interface Props {
  onSubmit: (data: any) => void
}

export default function BrandForm({ onSubmit }: Props) {

  const [brand, setBrand] = useState("")
  const [industry, setIndustry] = useState("")
  const [campaign, setCampaign] = useState("")
  const [product, setProduct] = useState("")

  const fieldStyle = {
    "& .MuiOutlinedInput-root": {
      color: "white",
      borderRadius: "12px",

      "& fieldset": {
        borderColor: "rgba(255,255,255,0.2)"
      },

      "&:hover fieldset": {
        borderColor: "#7f5af0"
      },

      "&.Mui-focused fieldset": {
        borderColor: "#2cb67d",
        boxShadow: "0 0 10px rgba(44,182,125,0.5)"
      }
    },

    "& .MuiInputLabel-root": {
      color: "rgba(255,255,255,0.6)"
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#2cb67d"
    }
  }

  return (

    <Box position="relative">

      {/* Glow Border Layer */}

      <Box
        sx={{
          position: "absolute",
          inset: "-2px",
          borderRadius: "20px",

          background: `
            linear-gradient(
              120deg,
              #7f5af0,
              #2cb67d,
              #3a86ff,
              #7f5af0
            )
          `,

          backgroundSize: "300% 300%",

          animation: "borderGlow 8s ease infinite",

          filter: "blur(8px)",
          opacity: 0.6,

          "@keyframes borderGlow": {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" }
          }
        }}
      />

      <Paper
        sx={{
          position: "relative",

          p: 5,
          mb: 4,
          borderRadius: 4,

          background: "rgba(18,18,18,0.85)",

          backdropFilter: "blur(14px)",

          border: "1px solid rgba(255,255,255,0.08)",

          boxShadow: "0 20px 60px rgba(0,0,0,0.8)"
        }}
      >

        <Stack spacing={3}>

          <TextField
            label="Brand"
            fullWidth
            sx={fieldStyle}
            onChange={(e) => setBrand(e.target.value)}
          />

          <TextField
            label="Industry"
            fullWidth
            sx={fieldStyle}
            onChange={(e) => setIndustry(e.target.value)}
          />

          <TextField
            label="Campaign Objective"
            fullWidth
            sx={fieldStyle}
            onChange={(e) => setCampaign(e.target.value)}
          />

          <TextField
            label="Product Info"
            fullWidth
            sx={fieldStyle}
            onChange={(e) => setProduct(e.target.value)}
          />

          <Button
            variant="contained"
            size="large"
            onClick={() =>
              onSubmit({ brand, industry, campaign, product })
            }
            sx={{
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
            GENERATE TWEETS
          </Button>

        </Stack>

      </Paper>

    </Box>
  )
}