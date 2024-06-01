export interface GenericDateConstructor<DateType extends Date = Date> {
    /**
     * The date constructor. Creates date with the current date and time.
     *
     * @returns The date instance
     */
    new (): DateType;

    /**
     * The date constructor. Creates date with the passed date, number of
     * milliseconds or string to parse.
     *
     * @param value - The date, number of milliseconds or string to parse
     *
     * @returns The date instance
     */
    new (value: Date | number | string): DateType;

    /**
     * The date constructor. Creates date with the passed date values (year,
     * month, etc.) Note that the month is 0-indexed.
     *
     * @param year - The year
     * @param month - The month. Note that the month is 0-indexed.
     * @param date - The day of the month
     * @param hours - The hours
     * @param minutes - The minutes
     * @param seconds - The seconds
     * @param ms - The milliseconds
     *
     * @returns The date instance
     */
    new (
        year: number,
        month: number,
        date?: number,
        hours?: number,
        minutes?: number,
        seconds?: number,
        ms?: number,
    ): DateType;
}
