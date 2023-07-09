import { useState } from "react";

export default function AttendanceTracker(): JSX.Element {
  const [attendanceCount, setAttendanceCount] = useState(0);

  const handleAddAttendee = () => {
    setAttendanceCount(attendanceCount + 1);
    // or, better alternative:
    // setAttendanceCount(prev => prev + 1);
  };

  const handleRemoveAttendee = () => {
    setAttendanceCount(attendanceCount - 1);
    // or, better alternative:
    // setAttendanceCount(prev => prev - 1);
  };

  const handleResetAttendance = () => {
    setAttendanceCount(0);
    // would be redundant to use setAttendanceCount(prev => 0)
    // since 0 does not depend on the value of prev at all
  };

    return (
      <>
        <p>Attendance count: {attendanceCount}</p>
        {attendanceCount<0 && <p>Negative attendance? Are you sure?</p>}
        <button onClick={handleRemoveAttendee}>-1</button>
        <button onClick={handleAddAttendee}>+1</button>
        {attendanceCount<0 && <button onClick={handleResetAttendance}>Reset attendance</button>}
      </>
    );
}
