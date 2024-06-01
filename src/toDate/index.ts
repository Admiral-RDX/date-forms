import { GenericDateConstructor } from '../types';

export function _toDate<DateType extends Date>(
    argument: DateType | number | string,
): DateType {
    const argument_string = Object.prototype.toString.call(argument);

    if (argument_string === '[object Date]') {
        new (argument.constructor as GenericDateConstructor<DateType>)(
            +argument,
        );
    }

    if (['[object Number]', '[object String]'].includes(argument_string)) {
        return new Date(argument) as DateType;
    }

    return new Date(NaN) as DateType;
}
