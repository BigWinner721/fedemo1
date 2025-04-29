'use client';

import { useEffect } from 'react';

export default function ScriptLoader() {
  useEffect(() => {
    // 立即隐藏预加载器，不等待脚本加载
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.style.display = 'none';
    }

    // 这个效果会在客户端运行，处理JS交互
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      try {
        // 加载所有JS文件，顺序很重要
        await loadScript('/static/js/jquery-3.7.1.min.js');
        await loadScript('/static/js/bootstrap.bundle.min.js');
        await loadScript('/static/js/swiper-bundle.min.js');
        await loadScript('/static/js/jquery.magnific-popup.min.js');
        await loadScript('/static/js/jquery.nice-select.min.js');
        await loadScript('/static/js/jquery.meanmenu.min.js');
        await loadScript('/static/js/jquery.waypoints.js');
        await loadScript('/static/js/jquery.counterup.min.js');
        await loadScript('/static/js/wow.min.js');
        await loadScript('/static/js/circle-progress.js');
        await loadScript('/static/js/main.js');
        
        // 初始化一些全局功能
        if (typeof window !== 'undefined' && window.jQuery) {
          // 初始化返回顶部按钮
          const backToTop = document.getElementById('back-top');
          if (backToTop) {
            window.addEventListener('scroll', () => {
              if (window.scrollY > 100) {
                backToTop.classList.add('active');
              } else {
                backToTop.classList.remove('active');
              }
            });

            backToTop.addEventListener('click', () => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            });
          }
        }
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadAllScripts();

    // 清理函数
    return () => {
      // 清理事件监听器
      const backToTop = document.getElementById('back-top');
      if (backToTop) {
        window.removeEventListener('scroll', () => {});
      }
    };
  }, []);

  return null; // 这个组件不渲染任何东西
} 