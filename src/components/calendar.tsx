"use client";
import { useState } from "react";
interface CalendarProps {
    container: {
        type: string;
    };
}

export default function Calendar(props: CalendarProps) {
    const { type } = props.container;


    const [calendarDisplay, setCalendarDisplay] = useState("flex");

    const [caretStyle, setCaretStyle] = useState("fa-angle-up");
  

    return (
        <>
            <h4>{type}:</h4>
            <div className="checked-date"
                onClick={() => {
                    setCalendarDisplay((prev) => {
                        return prev === "flex" ? "none" : "flex";
                    })
                    setCaretStyle((prev) => {
                        return prev === "fa-angle-up" ? "fa-angle-down" : "fa-angle-up";
                    })
                }}
            >
                <i className="fa-solid fa-calendar-days"></i>
                <p>01 Feb, 2024</p>
                <i className={`fa-solid ${caretStyle}`}></i>
            </div>
            <div className="calendar"
                style={{
                    display: calendarDisplay
                }}
            >
                <div className="calendar-title">
                    <i className="fa-solid fa-angle-left"></i>
                    <p>February 2024</p>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div className="week-days">
                    <p>MON</p>
                    <p>TUE</p>
                    <p>WED</p>
                    <p>THU</p>
                    <p>FRI</p>
                    <p>SAT</p>
                    <p>SUN</p>
                </div>
                <div className="month-days">
                    <p>28</p>
                    <p>29</p>
                    <p>30</p>
                    <p>31</p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                    <p>12</p>
                    <p>13</p>
                    <p>14</p>
                    <p>15</p>
                    <p>16</p>
                    <p>17</p>
                    <p>18</p>
                    <p>19</p>
                    <p>20</p>
                    <p>21</p>
                    <p>22</p>
                    <p>23</p>
                    <p>24</p>
                    <p>25</p>
                    <p>26</p>
                    <p>27</p>
                    <p>28</p>
                    <p>29</p>
                </div>
            </div>
        </>
    )
}