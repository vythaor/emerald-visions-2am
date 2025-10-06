import { Dialog, DialogContent } from "@/components/ui/dialog";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ImageItem {
  src: string;
  alt?: string;
}

interface ImageDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: ImageItem[];
  index: number;
  onIndexChange: (index: number) => void;
}

const ImageDialog: React.FC<ImageDialogProps> = ({ open, onOpenChange, items, index, onIndexChange }) => {
  const hasItems = items && items.length > 0 && index >= 0 && index < items.length;

  const goPrev = React.useCallback(() => {
    if (!hasItems) return;
    const nextIndex = (index - 1 + items.length) % items.length;
    onIndexChange(nextIndex);
  }, [hasItems, index, items.length, onIndexChange]);

  const goNext = React.useCallback(() => {
    if (!hasItems) return;
    const nextIndex = (index + 1) % items.length;
    onIndexChange(nextIndex);
  }, [hasItems, index, items.length, onIndexChange]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, goPrev, goNext]);

  const current = hasItems ? items[index] : null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl p-0 bg-transparent border-0 shadow-none">
        {current ? (
          <div 
            className="relative w-full cursor-pointer" 
            onClick={(e) => {
              // Close dialog when clicking outside the image
              if (e.target === e.currentTarget) {
                onOpenChange(false);
              }
            }}
          >
            <img
              src={current.src}
              alt={current.alt || "Preview"}
              className="w-full h-full object-contain max-h-[85vh] rounded-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
            />

            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pr-6">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-background/70 backdrop-blur" 
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pl-6">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-background/70 backdrop-blur" 
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;


