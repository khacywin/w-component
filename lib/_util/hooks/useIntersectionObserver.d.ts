declare function useIntersectionObserver(targetEl: Element, cb: (...arg: any) => any, options?: {
    config: {
        attributes: boolean;
        childList: boolean;
        subtree: boolean;
    };
}): void;
export default useIntersectionObserver;
