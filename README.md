## Notes

Soundblaster Play recognised via `lsusb`, but not in `aplay -l` or `arecord -l`?

Try unplugging the usb device, plugging it back in and running `dmesg`.

Getting errors like: `cannot find the slot for index 0 (range 0-1), error: -16`?

Looks like there's a conflict about slot indexes.

In `/lib/modprobe.d/aliases.conf`, I set:
`options snd-usb-audio index=0` to `index=1`

Seems to have fixed it, but have to make sure `~/.asoundrc` is pointing to correct devices again.
