![logo](/photos/lemonshark.png)
# lemonshark

a wireless split keyboard with per-key RGB and nice!view displays

---
## to do
- [ ] write readme (this is gonna take a lot of commits lol)
- [ ] upload images/gallery
- [ ] modify logo image to be cleaner (light mode jumpscare rn)
- [ ] create v2 PCB
- [ ] build guide?
- [ ] user-mods/cases (pyntie's case + plateless + OLED-compatible display cover)
- [ ] clean up ZMK config/readme/keymap (need to add link to this)

---
![main photo](/photos/DSC_6457.JPG)

▲ lemonshark with plateless case, RGB, and MBK glow

![left_RGB](/photos/DSC_6427.JPG)

![right_RGB](/photos/DSC_6435.JPG)

---
## features:
- choc v1 compatible
- wireless
- nice!view-compatible displays
- per-key RGB
- extra-large battery

---
## V1 BOM

| Part | Count | Desc | Source |
| ----------- | ----------- |----------- | ----------- |
| Left PCB | 1 | | Your preferred fab, or message me, there's always a chance I have spare boards |
| Right PCB | 1 | | same as above |
| nice!nano v2 | 2 | MCU, though any wireless Pro Micro-based MCU will work | [Typeractive (real)](https://typeractive.xyz/products/nice-nano) or [Amazon (clone)](https://www.amazon.com/Teyleten-Robot-Development-Bluetooth-Management/dp/B0CYLNZ6V4) |
| nice!view | 2 | display, vertical SSD1306 OLEDs are also compatible | [Typeractive (nice!view)](https://typeractive.xyz/products/nice-view) or [Amazon (OLED)](https://www.amazon.com/MakerFocus-Display-SSD1306-3-3V-5V-Arduino/dp/B079BN2J8V?th=1)
| Batteries | 1 | PS3 replacement batteries, comes in a 2pk | [Amazon](https://www.amazon.com/Replacement-Playstation-Controller-CECHZC2E-CECHZC2U-3/dp/B09726K2LC) |
| Choc V1 | 56 | switches, **choc V2 NOT compatible** | [Ambient Twilights](https://lowprokb.ca/collections/switches/products/ambients-silent-choc-switches?variant=44873426436260) you don't have to use these obviously, I just like them |
| Hotswap sockets | 56 | choc hotswap switches | [Amazon](https://www.amazon.com/Mechkeeb-Kailh-Low-Hot-swappable-Socket/dp/B0BS3JYJJQ?th=1) |
| 1N4148W SOD-123F | 56 | SMD diodes, buy spares (like 60) | [Digikey](https://www.digikey.com/en/products/detail/diotec-semiconductor/1N4148W/18833653) |
| EVQ-PUA02K | 2 | reset button | [Digikey](https://www.digikey.com/en/products/detail/panasonic-electronic-components/EVQ-PUA02K/286334) |
| SSSS811101 | 4 | power switch | [Digikey](https://www.digikey.com/en/products/detail/alps-alpine/SSSS811101/19529062) |
| S2B-PH-K-S | 2 | right angle male 2mm JST-PH connector| [Digikey](https://www.digikey.com/en/products/detail/jst-sales-america-inc/S2B-PH-K-S/926626) |
| Mill-Max 310-47-112-41-001000 | 5 | machine pin header for MCU and display | [Digikey](https://www.digikey.com/en/products/detail/mill-max-manufacturing-corp/310-47-112-41-001000/7364039) |
| Mill-Max 3320-0-00-15-00-00-03-0 | 65 | pins for headers, this count includes 7 spares | [Digikey](https://www.digikey.com/en/products/detail/mill-max-manufacturing-corp/3320-0-00-15-00-00-03-0/4147392) |
| Adafruit MiniBoost 5V TPS61023 | 2 | level shifter for LEDs | [Digikey](https://www.digikey.com/en/products/detail/adafruit-industries-llc/4654/12697636) |
| SK6812 Mini-E | 56 | LEDs, best to use SK6803 but it's not what I had, plus these were dirt cheap | [Amazon](https://www.amazon.com/Lizusidtsy-Similar-Individually-Addressable-500076361/dp/B0D62PYX62) |
| Keycaps of your choice | 56 | 54 1u keys, 2 1.5u keys. Choc-spaced | take your pick! MBK Legends Glow R1 for me |
| Case | 2 | one of each half | located in this repository |

---
## Credits

A massive thank you to the MrZealot and [Ceoloide](https://github.com/ceoloide) for creating and maintaining [Ergogen](https://ergogen.xyz), the software with which lemonshark was created. The [Absolem Club discord](http://discord.ergogen.xyz/) was irreplacable for help of all sorts, as was FlatFootFox with his [writeup](https://flatfootfox.com/ergogen-introduction/) on Ergogen. Additonally, thank you to car, Evelyn, [Peter](https://github.com/peterjc/), Fox, Turtlyn, and [Grinnie](https://github.com/regicidalplutophage) from Absolem Club, they were all a massive help in getting through this monumental project.

Thanks to Genteure and their [ZMK Shield Wizard](https://shield-wizard.genteure.workers.dev/), it made configuring ZMK a breeze. Also, thanks to the entire team behind the [ZMK firmware](https://zmk.dev), one of the main goals of this board wouldn't be possible without you.
