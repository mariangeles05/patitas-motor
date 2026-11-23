# Bitácora

## Day 1 – Linked nodes

### Diagram

```
cabeza
  |
  v
[ Vaccination ] --> [ Weight check ] --> [ Dental cleaning ] --> null
```

### Lost link

I set `siguiente` of the first node to `null`.

```
cabeza
  |
  v
[ Vaccination ] --> null

[ Weight check ] --> [ Dental cleaning ] --> null    (nobody points here)
```

**What happens:** the traversal prints only the vaccination and stops.

**Why:** the loop ends when `actual` is `null`, and the first node now points to nothing. The other two nodes still exist in memory, but no reference leads to them from `cabeza`. A linked list is only as complete as its chain of links, like a sheet taken out of the folder.