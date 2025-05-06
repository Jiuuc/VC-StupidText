/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { ChatBarButton, ChatBarButtonFactory } from "@api/ChatButtons";
import { classes } from "@utils/misc";
import { useState } from "@webpack/common";

import { cl, getToggled, setToggled } from ".";

export function Icon({ height = 20, width = 20, className }: { height?: number; width?: number; className?: string; }) {
    return (
        <svg
            viewBox="0 96 960 960"
            height={height}
            width={width}
            className={classes(cl("icon"), className)}
        >
            <circle cx="480" cy="576" r="400" fill="currentColor" />
            <circle cx="380" cy="476" r="40" fill="#393A41" />
            <circle cx="580" cy="476" r="40" fill="#393A41" />
            <path d="M328 676 q152 80 304 0" stroke="#393A41" strokeWidth="40" fill="transparent" />
        </svg>
    );
}


export const ToggleChatBarIcon: ChatBarButtonFactory = ({ isMainChat }) => {
    if (!isMainChat) return null;

    const [toggled, setToggledState] = useState(getToggled());

    const toggle = () => {
        const newState = !toggled;
        setToggled(newState);
        setToggledState(newState);
    };

    return (
        <ChatBarButton
            tooltip={toggled ? "Тупой текст врублен" : "Тупой текст отрублен"}
            onClick={toggle}
            onContextMenu={toggle}
            buttonProps={{
                "aria-haspopup": "dialog"
            }}
        >
            <Icon className={cl({ "auto-translate": toggled, "chat-button": true })} />
        </ChatBarButton>
    );
};
