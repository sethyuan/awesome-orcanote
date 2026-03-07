# Contribution Guidelines

Thank you for your interest in contributing to Awesome Orca Note! This project now uses `plugins.json` as the central registry for Orca Note plugins.

[English](#english) | [中文](#中文)

---

## English

### How to Contribute

To add or update a plugin, you need to modify the [plugins.json](plugins.json) file. Please ensure your pull request adheres to the following guidelines:

1. **Format Consistency**: Always follow the existing structure in [plugins.json](plugins.json).
1. **ID Requirements**: The `id` field must consist only of English letters, numbers, and hyphens (`-`) or underscores (`_`).
1. **Icons**:
   - Both SVG and PNG formats are supported, but **SVG is recommended**.
   - Icon dimensions must not exceed **80x80 pixels**.
   - Please optimize image file sizes using specialized software before conversion.
   - Use the provided scripts to generate the content for `icon_svg` or `icon_png`:
     - For SVG: `node scripts/minify-svg.js <path-to-svg>`
     - For PNG: `node scripts/png-to-base64.js <path-to-png>`
1. **Plugin Package Requirements**:
   The `zip` link should point to a compressed file that MUST contain:
   - `package.json`: Including a `version` field for the plugin version.
   - `dist/` folder: Containing the plugin execution files.
   - `LICENSE`: The license for the plugin.
   - `icon.png` or `icon.svg`: The icon file.
1. **Alphabetical Order**: Insert new plugins into the list in alphabetical order by `author` first then by `id`.
1. **Individual PRs**: Submit an individual pull request for each plugin suggestion.

### Quality Standards

Plugins should meet the following criteria:

- **Functional**: Works as described.
- **Documented**: Includes basic documentation or a README in its repository.
- **Maintained**: Shows signs of active maintenance or stability.
- **Relevant**: Specifically designed for Orca Note.
- **Legal**: Must have an appropriate open-source license.

### Submission Process

1. Fork this repository.
2. Update [plugins.json](plugins.json) following the guidelines above.
3. Test that all links (home, zip) work correctly.
4. Submit a pull request with a clear title and description.

---

## 中文

### 如何贡献

要添加或更新插件，您需要修改 [plugins.json](plugins.json) 文件。请确保您的拉取请求遵循以下指南：

1. **格式一致性**：请参考 [plugins.json](plugins.json) 中既有内容的格式进行填写。
2. **ID 限制**：`id` 字段只能由英文字母、数字以及连字符（`-`）或下划线（`_`）组成。
3. **图标规范**：
   - 支持 SVG 或 PNG 格式，**推荐使用 SVG**。
   - 图标尺寸最大不要超过 **80x80 像素**。
   - 建议在转换前使用图片优化软件尽量压缩图片大小。
   - 使用库自带的脚本提取填充到 `icon_svg` 或 `icon_png` 字段的内容：
     - SVG 图标：`node scripts/minify-svg.js <path-to-svg>`
     - PNG 图标：`node scripts/png-to-base64.js <path-to-png>`
4. **插件包要求**：
   `zip` 链接所指向的压缩包文件中必须包含以下内容：
   - `package.json`：必须含有 `version` 字段描述插件版本号。
   - `dist` 文件夹：内含插件运行所需的构建文件。
   - `LICENSE`：内含插件的协议文件。
   - `icon.png`或 `icon.svg`：图标文件。
5. **字母排序**：请先按作者顺序再按插件 ID 的字母顺序将新插件插入列表。
6. **独立 PR**：每个插件的建议应单独提交一个拉取请求。

### 质量标准

插件应满足以下标准：

- **功能性**：插件应按描述正常工作。
- **文档化**：包含基本的文档或 README。
- **维护性**：显示出活跃维护的迹象或处于稳定状态。
- **相关性**：必须是为虎鲸笔记（Orca Note）设计的。
- **合法性**：必须具有适当的开源许可证。

### 提交步骤

1. Fork 此仓库。
2. 按照上述指南更新 [plugins.json](plugins.json)。
3. 测试所有链接（项目主页、下载链接）是否可以正常访问。
4. 提交包含清晰标题和描述的拉取请求。

---

Thank you for your contributions! 感谢您的贡献！
