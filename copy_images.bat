@echo off
if not exist images mkdir images
set SRC=C:\Users\Dennis N\.gemini\antigravity\brain\28c2680e-63c6-4041-9277-5b4f7ad58ece
copy "%SRC%\nairobi_exterior_1773614220945.png" "images\fallback1.png"
copy "%SRC%\nairobi_living_room_1773614303025.png" "images\fallback2.png"
copy "%SRC%\nairobi_kitchen_1773614323160.png" "images\fallback3.png"
copy "%SRC%\nairobi_bedroom_1773614340598.png" "images\fallback4.png"
copy "%SRC%\nairobi_pool_area_1773614354933.png" "images\fallback5.png"
copy "%SRC%\nairobi_skyline_view_1773614511145.png" "images\fallback6.png"
dir images
echo DONE
