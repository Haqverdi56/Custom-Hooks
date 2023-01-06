function useInterval(callback, delay) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if(!delay && delay !== 0) {
      return
    }

    let id = setInterval(()=>savedCallback.current(), delay);
    return () => clearInterval(id);

  }, [delay]);
}

export default useInterval;