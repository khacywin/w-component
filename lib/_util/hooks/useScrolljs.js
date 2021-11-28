'use strict';

var React = require('react');

function useScroll ({ data, total, getData, isReserve }) {
    const [page, setPage] = React.useState(1);
    const _handleScroll = React.useCallback((e) => {
        const { scrollHeight, clientHeight, scrollTop } = e.currentTarget;
        if ((isReserve ? scrollTop === 0 : scrollHeight - clientHeight - scrollTop <= 10) &&
            data.length < total) {
            setTimeout(() => {
                getData(page + 1);
                setPage(page + 1);
            }, 100);
        }
    }, [isReserve, data.length, total, getData, page]);
    return {
        handleScroll: _handleScroll,
        page,
    };
}

module.exports = useScroll;
