/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { classNameFactory } from "@api/Styles";
import definePlugin from "@utils/types";

import { ToggleChatBarIcon } from "./icon";

export const cl = classNameFactory("vc-trans-");
export var toggled: boolean = false;

export function setToggled(value: boolean) {
    toggled = value;
}

export default definePlugin({
    name: "Stupid text",
    description: "The stupidest text",
    authors: [{ name: "Jiuuc", id: 1234567890n }],
    renderChatBarButton: ToggleChatBarIcon,
    async onBeforeMessageSend(_, message) {
        if (!message.content) return;
        if (!toggled) return;
        const words = message.content.split(" ");

        const convertedWords = words.map(word => {
            let modified = word;

            if (Math.random() < 0.5) {
                modified = `${modified[0]}-${modified.toLowerCase()}`;
            }

            if (Math.random() < 0.33) {
                modified += Math.random() < 0.5 ? "..." : "..";
            }

            if (Math.random() < 0.33) {
                modified += Math.random() < 0.5 ? "\\~" : "\\~\\~";
            }

            return modified;
        });

        message.content = convertedWords.join(" ");
    }
});
