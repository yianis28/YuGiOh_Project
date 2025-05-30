<script>
  let card = $state( {
    card_name:"",
    card_type: "",
    card_number: "",
    card_level: ""
  });
</script>

<form method="POST" action="?/create" class="container d-flex justify-content-center mt-5">
    <div class="card shadow-lg" style="max-width: 600px; width: 100%;">
        <div class="card-body">
            <h3 class="card-title text-center mb-4">Add a Card</h3>
            <div class="mb-3 w-100">
                <label for="card_name" class="form-label">Card Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="card_name"
                    name="card_name"
                    placeholder="z.B. Dark Magician Girl"
                    bind:value={card.card_name}
                />
            </div>
            <div class="mb-3 w-100">
                <label for="Card_Type" class="form-label">Card Type</label>
                <input
                    type="text"
                    class="form-control"
                    id="card_type"
                    name="card_type"
                    placeholder="z.B. Spell/Monster"
                    bind:value={card.card_type}
                />
            </div>
            <div class="mb-3 w-100">
                <label for="Card_Number" class="form-label">Card Number</label>
                <input
                    type="text"
                    class="form-control"
                    id="card_number"
                    name="card_number"
                    placeholder="z.B. LVM-1200"
                    bind:value={card.card_number}
                />
            </div>
            <div class="mb-3 w-100">
                <label for="card_level" class="form-label">Level</label>
                <select id="card_level" class="form-select" name="card_level"
                    bind:value={card.card_level}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>

                <button type="submit" class="btn btn-primary mt-3"
                    >Submit</button
                >
            </div>
        </div>
    </div>
</form>
