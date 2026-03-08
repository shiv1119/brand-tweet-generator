import { Card, CardContent, Typography, List, ListItem, Box } from "@mui/material"

export default function VoiceAnalysis({ voice }: { voice: string[] }) {

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
          mb: 4,
          borderRadius: 4,
          background: "rgba(18,18,18,0.85)", // glass effect
          color: "white",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.8)"
        }}
      >
        <CardContent>

          <Typography variant="h6" mb={1} sx={{ color: "#7f5af0" }}>
            Brand Voice Analysis
          </Typography>

          <List>
            {voice.map((v, i) => (
              <ListItem key={i} sx={{ fontSize: 16, color: "white", pl: 0 }}>
                • {v}
              </ListItem>
            ))}
          </List>

        </CardContent>
      </Card>
    </Box>
  )
}