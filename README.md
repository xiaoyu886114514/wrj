# 翼启全域

垂直起降固定翼无人机智慧物流项目官网。

本项目是一个基于 `Vite + React + TypeScript + Tailwind CSS` 构建的单页展示站，聚焦低空物流场景，围绕垂直起降、长航时巡航、智能飞控、模块化货舱、商业模式与社会价值等内容，展示项目整体方案与落地路径。

## 项目亮点

- 全中文官网内容，适合项目展示、路演与赛事答辩
- 覆盖手机端、平板端、电脑端的响应式布局
- 轻量科技风视觉系统与小动画交互
- 面向低空物流、应急投送、乡村振兴等应用场景

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## 本地开发

```bash
npm install
npm run dev
```

默认开发地址由 Vite 提供，生产构建命令：

```bash
npm run build
npm run preview
```

## 目录结构

```text
src/
  components/
    sections/    # 首页各业务区块
    ui/          # 通用 UI 组件
  hooks/         # 动画与视图相关 hooks
  lib/           # 工具函数
  App.tsx        # 页面入口结构
public/images/   # 官网展示图片资源
```

## 适用场景

- 三创赛、挑战杯、创新创业项目官网
- 无人机项目展示页
- 低空经济相关路演落地页

## 说明

当前仓库以展示官网为主，未接入真实后端服务。表单和下载区块目前为前端展示交互，可根据后续需求继续扩展。
