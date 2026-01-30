import { toast as sonnerToast } from "sonner";

interface ToastProps {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
}

export function useToast() {
  const toast = ({ title, description, variant }: ToastProps) => {
    const message = title || "";
    const descriptionText = description || "";

    if (variant === "destructive") {
      sonnerToast.error(message, {
        description: descriptionText,
      });
    } else {
      sonnerToast.success(message, {
        description: descriptionText,
      });
    }
  };

  return { toast };
}
