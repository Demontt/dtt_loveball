# dtt_loveball

## ScreenShot image
![image](/img/example.png)

## Address
[Demo](https://demontt.github.io/dtt_loveball/)

> The page can be refreshed multiple times because the static file is too large.

## OOP ( Object Oriented Programming )
* Everything is Object.
* Each balloon is a `div` object.

```
Balloon.prototype.drawBalloon = function(parent){
	this.parent = parent;
	......
}
```

## Random motion trajectory
* use rangdom function.

```
const randomRange = (min,max) => Math.random()*(max-min)+min;
```

## Audio load (audio || embed)
* HTML provides two media-audio labels, `audio` and `embed`
```
    <embed src="DAOKO.mp3" type="audio/mpeg" autostart="true" loop="true" >
    <audio src="DAOKO.mp3" type="audio/mpeg" autoplay="autoplay" loop="true"></audio>
```

* According to a large number of studies, the results are as follows:
    1. `embed`'s loading speed is significantly higher than `audio`.
    2. Chrome browser is not compatible with `embed`, such as loop playback not supported.
    3. Found in other browsers, `embed` has element coverage issues.
* All in all, both have their pros and cons, but it is recommended `audio`.
* And Recommended writing:
```
<div class="div_audio">
    <audio id="audio" controls="controls" autoplay="autoplay" hidden="true">
        <source src="resources/DAOKO.mp3" type="audio/mpeg">
    </audio>
</div>
```

## Lyrics synchronization problem
* Reference lrc file
```
let play = $("#lrc_row1");
```
> Files must use utf8 encoding format.

* Parsing the lrc file
```
let regex = new RegExp('\\[' + (minute + ":" + second) + '.+\\].+\n');
```
> Using regular expressions

* Get audio playback time
```
let minute = parseInt(audio.currentTime / 60);
minute = minute == 0 ? "00" : (minute + "").length < 2 ? "0" + minute : minute;
```
> The format is: xx:xx:xx


## Separate PC devices and mobile devices
* PC devices' View
![image](/img/example.png)

* mobile devices' View
![image](/img/mexample.jpg)

* Use ternary expressions to distinguish
```
window.location.href = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? "https://demontt.github.io/dtt_loveball/little/main.html" :  "https://demontt.github.io/dtt_loveball/main.html";
```

## Pull Request
> If you have a good idea, look forward to your `Pull Request`
