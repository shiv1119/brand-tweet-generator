import { Skeleton, Box } from "@mui/material"

export default function LoaderSkeleton() {
  return (
    <Box>
      <Skeleton
        variant="rectangular"
        height={120}
        sx={{
          mb: 2,
          borderRadius: 3,
          background: "linear-gradient(90deg, rgba(30,30,30,0.8), rgba(50,50,50,0.6), rgba(30,30,30,0.8))",
          backgroundSize: "200% 100%",
          animation: "skeletonGlow 1.5s ease-in-out infinite",
          boxShadow: "0 5px 20px rgba(0,0,0,0.4)"
        }}
      />
      <Skeleton
        variant="rectangular"
        height={120}
        sx={{
          mb: 2,
          borderRadius: 3,
          background: "linear-gradient(90deg, rgba(30,30,30,0.8), rgba(50,50,50,0.6), rgba(30,30,30,0.8))",
          backgroundSize: "200% 100%",
          animation: "skeletonGlow 1.5s ease-in-out infinite",
          boxShadow: "0 5px 20px rgba(0,0,0,0.4)"
        }}
      />
      <Skeleton
        variant="rectangular"
        height={120}
        sx={{
          borderRadius: 3,
          background: "linear-gradient(90deg, rgba(30,30,30,0.8), rgba(50,50,50,0.6), rgba(30,30,30,0.8))",
          backgroundSize: "200% 100%",
          animation: "skeletonGlow 1.5s ease-in-out infinite",
          boxShadow: "0 5px 20px rgba(0,0,0,0.4)"
        }}
      />

      {/* Skeleton glow animation */}
      <style>
        {`
          @keyframes skeletonGlow {
            0% { background-position: 200% 0; }
            50% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
      </style>
    </Box>
  )
}