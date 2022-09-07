# **Pavel Karman**

### Junior Frontend Developer

## Contact information

**Phone:** +375336095867
**E-mail:** PavelKarman.Pavlkan@gmail.com
**Telegram:** @Pavlkan

## **Briefly About Myself**

I am 24 years old and work as a pharmacist. One of the aspects of working in hospital's pharmacy is high level of interaction with computers and old software. That's how I started being interested in programming and seeking the ways to use the skills in my work. As for my personal values, I am a good team worker, I always try to do my best to delve into task, to optimize it and deepen my knowledge. That's the reason I am here - to gain theoretical base and practical skills in frontend development.

## **Skills**

-   HTML
-   CSS
-   JavaScript (basics)
-   Git

## **Code Example**

```javascript
function maxRedigit(num) {
    if (num < 100 || num > 999) {
        return null;
    } else {
        let str = String(num);
        let maxNumber = Math.max(str[0], str[1], str[2]);
        let minNumber = Math.min(str[0], str[1], str[2]);
        if (str[0] < maxNumber && str[0] > minNumber) {
            return +(maxNumber + str[0] + minNumber);
        } else if (str[1] < maxNumber && str[1] > minNumber) {
            return +(maxNumber + str[1] + minNumber);
        } else {
            return +(maxNumber + str[2] + minNumber);
        }
    }
}
```

```javascript
function sc(screws) {
    let result = 0;
    for (let i = 1; i < screws.length; i++) {
        if (screws[i] === screws[i - 1]) {
            result += 1;
        } else {
            result += 6;
        }
    }
    return result + screws.length;
}
```

```javascript
function remainder(a, b) {
    let aPos = Math.abs(a);
    let bPos = Math.abs(b);
    if (aPos === 0 || bPos === 0) {
        return NaN;
    } else if (a > +b) {
        return aPos - Math.floor(aPos / bPos) * bPos;
    } else {
        return bPos - Math.floor(bPos / aPos) * aPos;
    }
}
```

## **Education**

-   Hexlet
-   Learn.JavaScript
-   rsschool

## **Languages**

-   English: Upper-intermediate/Advanced, experience in speaking with native and advanced speakers, reading books in the original and constantly improving my knowledge.
-   Russian: native speaker.
