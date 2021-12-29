'use strict';

var React = require('react');

const DEFAULT_OPTIONS = {
    config: { attributes: true, childList: true, subtree: true },
};
function useMutationObservable(targetEl, cb, options = DEFAULT_OPTIONS) {
    const [observer, setObserver] = React.useState(null);
    React.useEffect(() => {
        const obs = new IntersectionObserver(cb);
        setObserver(obs);
    }, [cb, options, setObserver]);
    React.useEffect(() => {
        if (!observer)
            return;
        const { config } = options;
        observer.observe(targetEl, config);
        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [observer, targetEl, options]);
}

exports.useMutationObservable = useMutationObservable;
