<template>
  <footer>
            <div>
                <h3 role="heading">Information</h3>
                <ul role="list" class="fat">
                    <li role="listitem">
                        <a role="link" class="fft" to="/tutoriel">Tutoriel</a>
                    </li>
                    <li role="listitem">
                        <a role="link" class="fft" to="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 role="heading">Aide</h3>
                <ul role="list" class="fat">
                    <li role="listitem"><a role="link" class="fft" to="">Mentions l&eacute;gales</a></li>
                    <li role="listitem"><a role="link" class="fft" to="">Donn&eacute;es personnelles</a></li>
                    <li role="listitem"><a role="link" class="fft" to="">Cookies</a></li>
                    <li role="listitem"><a role="link" class="fft" to="">CGU</a></li>
                </ul>
            </div>
            <div>
                <h3 role="heading">Be Social</h3>
                <div class="rs">
                    <a href="https://www.facebook.com/therealmde/" rel="noopener noreferrer" target="_blank">
                    <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x"/>
                    </a>
                    <a href="https://www.facebook.com/therealmde/" rel="noopener noreferrer" target="_blank"> <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/></a>
                    <a href="https://www.facebook.com/therealmde/" rel="noopener noreferrer" target="_blank"> <font-awesome-icon :icon="['fab', 'twitter-square']" size="2x"/></a>

                </div></div>
        </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
    background: black;
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 35px;
}

footer div {
    width: 320px;
}

footer div h3 {
    font-size: 25px;
    line-height: 30px;
    margin: 35px 0;
    text-align: center;
}

.fat {
    list-style: none;
}

.fat a {
    color: grey;
    font-size: 20px;
    line-height: 25px;
    text-decoration: none;
}

.rs {
    display: flex;
    justify-content: space-around;
    width: 150px;
    margin: auto;

}

.fab {
    color: white;
    margin: 15px;
}
.fa-2x{
    color: whitesmoke;
}
</style>


