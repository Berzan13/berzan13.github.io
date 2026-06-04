# Dokumentation


## Importering React & MaterialUI
```js
const { useState, useEffect, useRef } = React;
const { Button, Modal, Box, Typography} = MaterialUI;
```
Importerar alla react-hooks samt MaterialUI komponenter. MaterialUI används som färdig designade html komponenter via ett UI biblotek.

***
## Budget pie chart
```js
function BudgetChart({ income, expense }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) chartRef.current.destroy();
    const ctx = canvasRef.current.getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Inkomst', 'Utgift'],
        datasets: [{ data: [income, expense], backgroundColor: ['#4caf50', '#f44336'], borderWidth: 0 }]
      },
      options: { plugins: { legend: { labels: { color: 'grey' } } } }
    });
  }, [income, expense]);

  return <canvas ref={canvasRef} width="300" height="300" />;
}

```

Skapas en pie chart genom chart.js. En ny chart skapas när income eller expense variablerna ändras men först förstörs nuvarande chart (om det finns en) innan en ny skapas. Detta gör att vi undviker dupliceringar. 

***
## Skapa nya transaktioner
```js
 function handleAdd() {
    const amount = Number(inputValue);
    if (!selected) { 
      alert('Vänligen välj inkomst eller utgift')
      return  
    }

    const newTransaction = { 
      id: crypto.randomUUID(),
      type: selected, 
      amount, 
      title, 
      category };

    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    localStorage.setItem("budget", budget + (selected === 'income' ? amount : -amount));
    setBudget(prev => selected === 'income' ? prev + amount : prev - amount);
    setTitle("")
    setInputValue("")
    setCategory("")
  }

```

En funktion som skapar en ny transaktion genom att ta inputValue, konvertera det till ett nummer, och sedan m.h.a en if-sats kollar så att klienten valt antigen "expense" eller "income" som typ, annars visas alert. Sedan skapas en objects variabel där all data finns angående den nya transaktionen. Koden genererar ett unikt id för varje transaktion m.h.a crypto.randomUUID(). Sedan skapas en till variabel med både de nuvarande transaktionerna ...transactions samt den nya transaktionen newTransaction. Sedan skickar vi in allt i localStorage och stringifyar variabeln updatedTransactions. Sedan skapas ny budget där man antigen tar +amount eller -amount beroende på selected för att uppdatera budget värdet. Vi rensar sedan title, inputValue (amount) och category.

***
## Transaction rendering
```html
 <div className="div-three">
        <h2 className="title">Transaktioner</h2>
        {transactions.length === 0 ? (
          <p className="no-transactions">Inga poster ännu. Lägg till din första transaktion.</p>
        ) : (
          <div>{listPosts}</div>
        )}
      </div>

```

En ternary operator som kollar att: om transactions.length är lika med 0 så skrivs en liten paragraf "Inga poster ännu. Lägg till din första transaktion.", annars visas listPosts m.h.a en div (för då är transactions.length > 0). listPosts är deklarerad i js.



