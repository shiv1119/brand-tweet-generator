"use client"
import { Card, CardContent, Typography, IconButton, Box } from "@mui/material"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import { useState } from "react"

export default function TweetCard({ tweet }: { tweet: string }) {

  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(tweet)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <Box position="relative">

      {/* Glow Border */}
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

      <Card
        sx={{
          position: "relative",
          mb: 2,
          borderRadius: 4,
          background: "rgba(18,18,18,0.85)", // dark glass background
          color: "white",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(14px)",
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.8)"
          }
        }}
      >
        <CardContent>
          <Typography sx={{ lineHeight: 1.7, fontSize: 16 }}>
            {tweet}
          </Typography>

          <Box display="flex" justifyContent="flex-end" mt={1}>
            <IconButton
              onClick={copy}
              sx={{
                color: "#7f5af0",
                transition: "0.3s",
                "&:hover": {
                  color: "#2cb67d",
                  transform: "scale(1.2)"
                }
              }}
            >
              <ContentCopyIcon />
            </IconButton>
          </Box>

          {copied && (
            <Typography sx={{ fontSize: 12, color: "#2cb67d", mt: 0.5 }}>
              Copied
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  )
}