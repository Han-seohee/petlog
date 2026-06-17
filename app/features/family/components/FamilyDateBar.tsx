"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { addDays, subDays, format } from "date-fns";
import { ko } from "date-fns/locale";

export function FamilyDateBar() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="border-b">

      {/* =========================
          📌 DATE BAR (기본 상태)
      ========================= */}
      {!open && (
        <div className="flex items-center justify-between py-3 animate-in fade-in duration-200">

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDate((d) => subDays(d, 1))}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <button
            onClick={() => setOpen(true)}
            className="font-semibold text-sm px-3 py-1 rounded-md hover:bg-gray-100"
          >
            {format(date, "yyyy.MM.dd (eee)", { locale: ko })}
          </button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDate((d) => addDays(d, 1))}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

        </div>
      )}

      {/* =========================
          📌 CALENDAR (열린 상태)
      ========================= */}
      {open && (
        <div className="flex justify-center py-3 animate-in fade-in slide-in-from-top-2 duration-200">

          <div className="w-full max-w-md">

            {/* 캘린더 */}
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => {
                if (!d) return;
                setDate(d);
                setOpen(false);
              }}
              locale={ko}
              className="w-full rounded-md border p-3"
            />

          </div>
        </div>
      )}

    </div>
  );
}