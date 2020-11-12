#!/usr/bin/env bash
function cd {
        builtin cd "$@" && ls
}

