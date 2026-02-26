"use client";

import { useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function MyDateRange() {
    const [range, setRange] = useState<DateRange | undefined>();
    const [openCalendar, setOpenCalendar] = useState(true);

    const handleSelect = (selectedRange: DateRange | undefined) => {
        setRange(selectedRange);

        // Close calendar when both dates selected and not same
        if (
            selectedRange?.from &&
            selectedRange?.to &&
            selectedRange.from.getTime() !== selectedRange.to.getTime()
        ) {
            setOpenCalendar(false);
        }
    };

    return (
        <>
            {openCalendar && (
                <DayPicker
                    mode="range"
                    selected={range}
                    onSelect={handleSelect}
                    disabled={{ before: new Date() }} // same as minDate
                />
            )}
        </>
    );
}