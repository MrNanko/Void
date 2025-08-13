document.addEventListener('DOMContentLoaded', function() {
    // 只为没有行号的代码块添加复制按钮
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(function(codeBlock) {
        const pre = codeBlock.parentElement;
        
        // 检查是否有行号 - 如果有.lntable或行号span则跳过
        if (pre.closest('.highlight.lntable') || 
            codeBlock.querySelector('span[style*="user-select:none"]')) {
            return;
        }
        
        // 创建复制按钮
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>';
        copyButton.setAttribute('title', 'Copy code');
        
        // 添加点击事件
        copyButton.addEventListener('click', function() {
            // 获取代码文本，移除行号
            let codeText = '';
            const spans = codeBlock.querySelectorAll('span[style*="display:flex"]');
            
            if (spans.length > 0) {
                // 处理有 display:flex 包装的代码
                spans.forEach(span => {
                    const innerSpan = span.querySelector('span:last-child');
                    if (innerSpan) {
                        codeText += innerSpan.textContent + '\n';
                    }
                });
            } else {
                // 处理普通代码块
                codeText = codeBlock.textContent;
            }
            
            // 复制到剪贴板
            navigator.clipboard.writeText(codeText.trim()).then(function() {
                // 显示复制成功反馈
                copyButton.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>';
                copyButton.style.color = '#28a745';
                
                setTimeout(function() {
                    copyButton.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>';
                    copyButton.style.color = '';
                }, 2000);
            }).catch(function(err) {
                console.error('复制失败:', err);
            });
        });
        
        // 将按钮添加到代码块容器
        if (pre.style.position !== 'relative') {
            pre.style.position = 'relative';
        }
        pre.appendChild(copyButton);
    });
});