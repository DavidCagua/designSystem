import React, { ReactElement } from 'react';
import { Spacing } from '@ds/foundation';
export interface MarginProps {
    space?: keyof typeof Spacing;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    children?: ReactElement;
}
declare const Margin: React.FC<MarginProps>;
export default Margin;
