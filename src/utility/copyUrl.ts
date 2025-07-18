// export const copyUrl = (
//     url: string,
//     copied: boolean,
//     setCopied: React.Dispatch<React.SetStateAction<boolean>>
//   ) => {
//     navigator.clipboard.writeText(url) 
//       .then(() => {
//         setCopied(true);
//         setTimeout(() => setCopied(false), 2000);
//       })
//       .catch((err) => {
//         console.error('Failed to copy: ', err);
//       });
//   };
export const copyUrl = (
  url: string,
  copied: boolean,
  setCopied: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (
    typeof navigator !== "undefined" &&
    navigator.clipboard &&
    window.isSecureContext
  ) {
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  } else {
    // Fallback for HTTP or older browsers
    const textarea = document.createElement("textarea");
    textarea.value = url;
    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Fallback: Copy failed", err);
    }
    document.body.removeChild(textarea);
  }
};

