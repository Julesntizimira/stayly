"use client";

import { useState } from "react";

export default function Filter(props: any) {
    const { filter } = props
    const [height, setHeight] = useState("160px");
    return (
        <div className="checkbox-filters">
            <h3>{filter.title}</h3>
            <div className="checkboxes-container"
                style={{
                    maxHeight: height,
                }}>
                {filter.filters.map((subFilter: any) => (
                    <label key={subFilter.label} className="filters-label">
                        <input
                            type={filter.type}
                            name={filter.name ? filter.name : undefined}
                        />
                        <span>{subFilter.label}</span>
                    </label>
                ))}
            </div>
            {
                filter.filters.length > 9 && (
                    <div className="drop-down"
                        onClick={() => {
                            setHeight((prev) => {
                                return prev === "160px" ? "1000px" : "160px";
                            })
                        }}
                    >
                        <span>{height == "160px" ? "Show more" : "Show Less"}</span>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>)
            }
        </div>
    )
}