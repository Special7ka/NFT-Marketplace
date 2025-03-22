export const getAltFromPath = (path?: string) => {
  if (!path) return "image";
  return path.split("/").pop()?.split(".")[0] || "image";
};
