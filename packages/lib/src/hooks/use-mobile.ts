import * as React from 'react';

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
    let [isMobile, setIsMobile] = React.useState<boolean | undefined>(
        undefined,
    );

    React.useEffect(() => {
        let mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

        function handleOnChange() {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        }

        mql.addEventListener('change', handleOnChange);

        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

        return () => {
            return mql.removeEventListener('change', handleOnChange);
        };
    }, []);

    return !!isMobile;
}
