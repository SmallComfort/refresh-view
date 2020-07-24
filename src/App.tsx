import React, { useRef, useEffect } from 'react';
import styles from './App.module.css';

interface Props {
  children?: React.ReactNode;
  loading?: boolean;
  threshold?: number;
  style?: React.CSSProperties;
  onPullRefresh?: () => void;
}

interface Refs {
  iconRef: React.RefObject<HTMLDivElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  touchLockRef: React.MutableRefObject<boolean>;
}

export default function RefreshView(props: Props) {
  const iconRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const touchLockRef = useRef<boolean>(false);
  useEffects(props, {iconRef, contentRef, touchLockRef})
  return (
    <div className={styles.container}>
      <div className={styles.pull}>
        <div className={styles.icon} ref={iconRef}></div>
      </div>
      <div className={styles.content} ref={contentRef}>
        {props.children}
      </div>
    </div>
  );
}

function useEffects(props: Props, refs: Refs) {
  useEffect(() => {
    const iconEle = refs.iconRef.current;
    const contentEle = refs.contentRef.current;

    if (!iconEle || !contentEle) {
      return;
    }

    let translateY = 0;
    let touchStartClientY = 0;
    let touchStartTranslateY = 0;

    const transform = () => {
      // todo
    };

    const onTouchStart = (event: TouchEvent) => {
      refs.touchLockRef.current = true;
      // todo
    };

    const onTouchMove = (event: TouchEvent) => {
      // todo
    };

    const onTouchEnd = (event: TouchEvent) => {
      refs.touchLockRef.current = false;
      // todo
    };

    contentEle.addEventListener('touchstart', onTouchStart);
    contentEle.addEventListener('touchmove', onTouchMove, { passive: false });
    contentEle.addEventListener('touchend', onTouchEnd);

    return () => {
      contentEle.removeEventListener('touchstart', onTouchStart);
      contentEle.removeEventListener('touchmove',  onTouchMove);
      contentEle.removeEventListener('touchend', onTouchEnd);
    };
  }, [refs.contentRef, refs.iconRef, refs.touchLockRef]);
  useEffect(() => {
    const iconEle = refs.iconRef.current;
    const contentEle = refs.contentRef.current;
    const touchLock = refs.touchLockRef.current;
    if (!iconEle || !contentEle || touchLock) {
      return;
    }
    if (props.loading) {
      // todo
    } else {
      // todo
    }
  }, [props.loading, refs.contentRef, refs.iconRef, refs.touchLockRef]);
}
