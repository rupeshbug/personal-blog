# When Bigger Models Stop Helping: A Practical Demo of the Bayes Error Floor

Imagine you’re building a model to predict whether a patient has a disease based on their symptoms.

After going through the full pipeline — data cleaning, feature engineering, modeling — you reach an accuracy of 83%.

In a stakeholder meeting, you confidently say:

*“We can probably push this to 90%.”*

Then the real work begins.

You tune hyperparameters.

You try more data.

You switch to bigger, more powerful models.

But nothing changes.

The accuracy barely moves.

And then it hits you:

Two patients can have identical symptoms…

and still have different diagnoses.

At that point, a different kind of question emerges:

**What if the problem itself has a limit?**

There’s a Third Possibility

When a model stops improving, we usually assume one of two things:

The model isn’t powerful enough
The training process isn’t good enough

So we respond accordingly:

Try a deeper model
Tune hyperparameters
Add more data

But there’s a third possibility that is often overlooked:

The data itself does not contain enough information.

Even with the perfect model, trained perfectly,
some predictions would still be wrong.

Not because the model failed —
but because the problem is inherently ambiguous.